const profileInput = document.getElementById('profile');
const profilePreview = document.getElementById('profilePreview');

profilePreview.onclick = () => profileInput.click();

profileInput.onchange = e => e.target.files[0] && (profilePreview.src = URL.createObjectURL(e.target.files[0]));

