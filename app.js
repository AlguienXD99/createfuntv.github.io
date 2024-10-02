document.addEventListener("DOMContentLoaded", function() {
    // Obtener el usuario desde localStorage
    const user = localStorage.getItem('user');

    const profilePic = document.getElementById('profile-pic');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const message = document.getElementById('message');
    const joinBtn = document.getElementById('join-btn');
    const joinBtn2 = document.getElementById('join-btn2');

    if (user) {
        // Si hay un usuario registrado, mostrar la foto de perfil
        const username = JSON.parse(user).username;
        profilePic.innerText = username.charAt(0).toUpperCase();
        profilePic.classList.remove('hidden');
        
        // Hacer visibles los botones de unirse al equipo
        joinBtn.classList.remove('hidden');
        joinBtn2.classList.remove('hidden');
    } else {
        // Si no hay un usuario registrado, mostrar botones de login y registro
        loginBtn.classList.remove('hidden');
        registerBtn.classList.remove('hidden');
        message.classList.remove('hidden');
    }

    // Ejemplo de acción al unirse a un canal
    joinBtn.addEventListener('click', function() {
        if (!user) {
            alert("Debes iniciar sesión para unirte a un equipo.");
            return;
        }
        // Aquí se puede agregar lógica para enviar una petición de unión
        alert("Has solicitado unirte al equipo del Canal 1.");
    });

    joinBtn2.addEventListener('click', function() {
        if (!user) {
            alert("Debes iniciar sesión para unirte a un equipo.");
            return;
        }
        alert("Has solicitado unirte al equipo del Canal 2.");
    });
});
