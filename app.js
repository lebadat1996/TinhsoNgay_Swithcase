function Day() {
    let month = parseInt(document.getElementById("MONTH").value );
    if(month >=1 && month <= 12) {
        switch (month) {
            case 4:
            case 6:
            case 9:
            case 11:
                alert('co 30 ngay');
                break;
            case 2:
            case 3:
                alert('co 28,29 ngay');
                break;
            default : alert('co 31 ngay');
        }
    }
}