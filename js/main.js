

const formatPhone = (phone) => {
    phone = document.getElementById('phone').value;
    const showPhoneFormat = document.querySelector('.dispaly_phone h2');
	const indexFind = (index) => {
		index = phone.charAt(index);
		return index;
	};

	for (let i = 0; i < phone.length; i++) {
		if (phone.length === 12) {
			const phoneDisplay = `${indexFind(0)}${indexFind(1)} (${indexFind(2)}${indexFind(3)}${indexFind(
				4
			)}) ${indexFind(5)}${indexFind(6)}${indexFind(7)}-${indexFind(8)}${indexFind(9)}-${indexFind(
				10
            )}${indexFind(11)}`;
            
            showPhoneFormat.classList.remove('error');
            showPhoneFormat.innerHTML= phoneDisplay;
        }else{
            showPhoneFormat.classList.add('error');
            showPhoneFormat.innerHTML= 'Not Valid Format';
        }
        
	}
};


// console.log(formatPhone('+71234567850'));

