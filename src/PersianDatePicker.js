import React from 'react';
import momentJalaali from 'moment-jalaali';
import PersianDate from 'react-datepicker2';

export default function PersianDatePicker() {
	console.log(
		momentJalaali('13990125122957', 'jYYYYjMMjDDHH:mm:ss').format(
			'jYYYY/jMM/jDD',
		),
	);

	const [persianDate, setPersianDate] = React.useState({
		value: momentJalaali('1399/1/25', 'jYYYY/jM/jD'),
	});

	return (
		<>
			<PersianDate
				timePicker={true}
				persianDigits={false}
				isGregorian={false}
				value={persianDate.value}
				onChange={(value) => setPersianDate({value})}
			/>

			<style>
				{`
                    * {
                        outline: none !important;
                    }

                    input.rc-time-picker-input {
                        font-size: 13px;
                    }

                    button.title,button.title * {
                        font-size: 13px !important;
                    }
                `}
			</style>
		</>
	);
}
