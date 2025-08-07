import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileAvatar from "@/assets/profile-avatar.png";

export const ProfileHeader = () => {
  return (
    <div className="text-center space-y-4">
      <Avatar className="w-24 h-24 mx-auto ring-2 ring-primary/30">
        <AvatarImage src={profileAvatar} alt="Ran Online Ultima" />
        <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl font-bold">
          ROU
        </AvatarFallback>
      </Avatar>
      
      <div>
        <h1 className="text-2xl font-bold gradient-text">
          Ran Online Digmaan
        </h1>
        <p className="text-muted-foreground mt-1">
          Official Gaming Community
        </p>
      </div>
    </div>
  );
};