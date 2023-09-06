const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});


document.getElementById('careid').addEventListener('click', ()=>{
    const careid = document.getElementById('caregiver');
    const patientID = document.getElementById('patient');
    careid.classList.remove('hidden');
    patientID.classList.add('hidden')
})

document.getElementById('patientid').addEventListener('click', ()=>{
    const careid = document.getElementById('caregiver');
    const patientID = document.getElementById('patient');
    careid.classList.add('hidden');
    patientID.classList.remove('hidden')
})