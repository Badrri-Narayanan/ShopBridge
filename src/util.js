const formatCurrency = (n) => {
    return "₹ " + Number(n.toFixed(2)).toLocaleString() + " ";
}

export default formatCurrency;