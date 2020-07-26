export const dateTime = (timestamp) => {
	return new Intl.DateTimeFormat('id-ID', 
		{
			year 	: 'numeric', 
			month 	: 'long',
			day 	: 'numeric', 
			hour 	: '2-digit', 
			minute 	: '2-digit'
		}
	).format(timestamp)
}