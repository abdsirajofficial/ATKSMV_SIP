// Import useState and useEffect from React if not already imported
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// Create a custom hook to manage global loading state
export const useGlobalLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Request interceptor
    const reqInterceptor = axios.interceptors.request.use(config => {
      setIsLoading(true);
      return config;
    }, error => {
      setIsLoading(false);
      return Promise.reject(error);
    });

    // Response interceptor
    const resInterceptor = axios.interceptors.response.use(response => {
      setIsLoading(false);
      return response;
    }, error => {
      setIsLoading(false);
      return Promise.reject(error);
    });

    // Cleanup function to remove interceptors
    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    };
  }, []);

  return [isLoading, setIsLoading];
};

// In your components, use the custom hook to get the loading state
// const [isLoading, setIsLoading] = useGlobalLoading();