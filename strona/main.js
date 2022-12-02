const navBtn = document.querySelector('.bars')
const navMobile = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer-year')

const handleNav = () => {
    navMobile.classList.toggle('active')
    // console.log('klik');
}


const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()

navBtn.addEventListener('click', handleNav)
navMobile.addEventListener('click', handleNav)
