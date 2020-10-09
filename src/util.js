export default {
    formatCurrency: function(n) {
        return "₹" + Number(n.toFixed(2)).toLocaleString() + " ";
    }
}