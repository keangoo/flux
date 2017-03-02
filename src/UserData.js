export default {
	init: () => {
		localStorage.clear();
		localStorage.setItem('users', JSON.stringify([
			{
				name: "Thien",
				sex: "male"
			},
			{
				name: "Long",
				sex: "other"
			}
		]));
	}
}