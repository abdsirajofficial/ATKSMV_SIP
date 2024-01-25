import React from 'react'

function FormateCurrency({amount}) {
    return Intl.NumberFormat('en-IN', {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
    }).format(amount / 1);
}

export default FormateCurrency
