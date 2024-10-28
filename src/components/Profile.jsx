

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser')) || {};

  return (
    <div className="profile-container mt-4">
      <h2 className="text-center">Perfil del Usuario</h2>
      <div className="card mt-3 mx-auto w-50">
        <div className="card-body">
          <h5 className="card-title">Nombre: {user.name}</h5>
          <p className="card-text">Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
