import axios from "axios";
import path from "path";
import { toast } from "react-hot-toast";

export const api_url = import.meta.env.VITE_APP_API_URL;

//login api
export const loginApi = async (path, data, setLoading) => {
  try{
    const res = await axios.post(api_url + path, data)
    return res
  } catch (err){
    toast.error(err.response.data.error, {duration: 1500})
    setLoading(false)
  }
}
//rigester api
export const rigesterApi = async (path, data, setLoading) => {
  try{
    const res = await axios.post(api_url + path,data)
    return res
  } catch (err){
    toast.error(err.response.data.error, {duration: 1500})
    setLoading(false)
  }
}
//add Nominee api
export const addNomineeApi = async (path, data) => {
  try{
    const res = await axios.post(api_url + path,data)
    return res
  } catch (err){
    toast.error(err.response.data.error, {duration: 1500})
  }
}
//getUser api
export const getUserApi = async (path, setTotal, setuserData, settotalUsers) => {
  try{
    const res = await axios.get(api_url+path)
    setuserData(res.data.users)
    settotalUsers(res.data.totalUsers)
    setTotal(res.data.totalPages)
    return res
  } catch (err) {
    // toast.error(err.response.data.error.message, {duration: 1500}) 
  }
}
export const getUserInActiveApi = async (path,setInActivetotalUsers, setInActiveTotal, setuserInActiveData) => {
  try{
    const res = await axios.get(api_url+path)
    setuserInActiveData(res.data.users)
    setInActivetotalUsers(res.data.totalUsers)
    setInActiveTotal(res.data.totalPages)
    return res
  } catch (err) {
    // toast.error(err.response.data.error.message, {duration: 1500}) 
  }
}
//gethistory api
export const gethistory = async (path, setTotal, setHistory) => {
  try{
    const res = await axios.get(api_url+path)
    setHistory(res.data.history)
    setTotal(res.data.totalPages)
  return res
  } catch(err) {
    // toast.error(err.response.data.error.message, {duration: 1500})
  }
}
//get Withdrawal
export const getWithdrawal = async (path, setTotal, setwithdrawal) => {
  try{
    const res = await axios.put(api_url+path)
    setwithdrawal(res.data.transactions)
    setTotal(res.data.totalPages)
  return res
  } catch(err) {
    // toast.error(err.response.data.error.message, {duration: 1500})
  }
}
//accept withdrawal request
export const acceptWithrawalReqApi = async (path, data) => {
  try{
    const res = await axios.put(api_url+path, data)    
    toast.success(res.data.msg)
    return res
  } catch(err) {
    // toast.error(err.response.data.error.message, {duration: 1500})
  }
}
//delete withdrawal request
export const  delWithrawalReq = async (path, data) => {
  try{
    const res = await axios.delete(api_url+path, data)   
    return res
  } catch(err) {
    toast.error("Try again later", {duration: 1500})
  }
}
//delete withdrawal request
export const delUserApi = async (path, data) => {
  try{
    const res = await axios.delete(api_url+path, data)  
    return res
  } catch(err) {
    toast.error("try again later", {duration: 1500})
  }
}
//edit api
export const editApi = async (path,data) => {
  try{
    const res = await axios.put(api_url+path, data)
    return res
  } catch (err){
    toast.error("Try again later", {duration : 1500 })
  }
}
//get Package
export const getMonPackageApi = async (path, userId, setmonPackages, setcurrentMonPackId) => {
  try{
    const res = await axios.put(api_url+ path, userId)
    setmonPackages(res.data.packages)
    setcurrentMonPackId(res?.data?.lastPack?.packId || 0)
    return res
  } catch(err){
    // toast.error()
  }
}
//total Package
export const getTotalPackageApi = async (path, userId, setmonPackages,setannPackages, setcurrentMonPackId) => {
  try{
    const res = await axios.put(api_url+ path, userId)
    setmonPackages(res.data.totalPackages[0])
    setannPackages(res.data.totalPackages[1])
    setcurrentMonPackId(res?.data?.lastPack?.packId || 0)
    return res
  } catch(err){
    // toast.error()
  }
}
//get Package
export const getAnnualPackageApi = async (path, userId, setmonPackages, setcurrentAnnPackId) => {
  try{
    const res = await axios.put(api_url+ path, userId)
    setmonPackages(res.data.packages)
    setcurrentAnnPackId(res.data.lastPack.packId)
    return res
  } catch(err){
    // toast.error()
  }
}
//add Package
export const addPackageApi = async (path, data) => {
  try{
    const res = await axios.post(api_url+ path, data)
    return res
  } catch(err){
    // toast.error("try again later", {duration: 1500})
  }
}
//del Package
export const delPackageApi = async (path) => {
  try{
    const res = await axios.delete(api_url+ path)
    return res
  } catch(err){
    // toast.error("try again later", {duration: 1500})
  }
}

//Users routes
//makeWithdrawal Api
export const makeWithdrawApi = async (path, data) => {
  try{
    const res = await axios.post(api_url + path, data)
    return res
  } catch (err){
    // toast.error(err.response.data.error.message, {duration: 1500})
  }
}
//getprofile api
export const getProfileApi = async (path, data, setprofile) => {
  try{
    const res = await axios.put(api_url + path, data)
    setprofile(res.data.profile)
  return res
  } catch(err) {
    // toast.error("Try again later", {duration: 1500})
  }
}
//getnomminee api
export const getnomineeApi = async (path, data, setnominee) => {
  try{
    const res = await axios.put(api_url + path, data)
    setnominee(res.data.nominee)
  return res
  } catch(err) {
    // toast.error("Try again later", {duration: 1500})
  }
}
//get Withdrawal
export const gettransaction = async (path, setTotal, settransaction) => {
  try{
    const res = await axios.put(api_url+path)
    settransaction(res.data.transactions)
    setTotal(res.data.totalPages)
  return res
  } catch(err) {
    // toast.error(err.response.data.error.message, {duration: 1500})
  }
}
export const gettransactionApi = async (path, setTotal, settransaction) => {
  try{
    const res = await axios.get(api_url+path)
    settransaction(res.data.successTransaction)
    setTotal(res.data.totalPages)
  return res
  } catch(err) {
    // toast.error(err.response.data.error.message, {duration: 1500})
  }
}
//get Withdrawal
export const getPentransactionApi = async (path,  setPendingTotal, setpenTransaction) => {
  try{
    const res = await axios.get(api_url+path)
    setpenTransaction(res.data.pendingTransaction)
    setPendingTotal(res.data.totalPages)
  return res
  } catch(err) {
    // toast.error(err.response.data.error.message, {duration: 1500})
  }
}
//Package amount Api
export const monPackApi = async (path, data) => {
  try{
    const res = await axios.post(api_url + path, data)
    return res
  } catch (err){
    toast.error(err.response.data.error.message, {duration: 1500})
  }
}
//getadmin api
export const getadminApi = async (path, setadmin) => {
  try{
    const res = await axios.get(api_url+path)
    setadmin(res.data.admin[0])
    return res
  } catch (err) {
    toast.error(err.response.data.error, {duration: 1500})
  }
}
//get Withdrawal
export const eidtPackageApi = async (path, data) => {
  try{
    const res = await axios.put(api_url+path, data)
  return res
  } catch(err) {
    toast.error(err.response.data.err, {duration: 1500})
  }
}