import { UserUpdateForm } from "@/feature/UserUpdateForm";
import { LogoutButton } from "@/feature/session/LogoutButton";
import { userService } from "@/shared/api/users";

const SettingsPage = async () => {
  const user = await userService.getUser();
  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>

            <UserUpdateForm user={user.user} />
            <hr />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
