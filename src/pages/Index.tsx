import { ProfileHeader } from "@/components/ProfileHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { LinkCard } from "@/components/LinkCard";
import { Card } from "@/components/ui/card";
import { Download, HardDrive, Users } from "lucide-react";
import gameBanner from "@/assets/game-banner.jpg";

const downloadLinks = [
  {
    title: "STREAMER PACK",
    url: "https://drive.google.com/file/d/11jbY9V8HvqRfsxanrE0PK0zm8fSAh1PQ/view?usp=sharing",
    icon: <Download className="w-5 h-5" />
  },
  {
    title: "G-Drive (Full Client 1)",
    url: "https://drive.google.com/file/d/1bzj3WcheoFK4BicIaT5OouoQZnKcc2IL/view?usp=sharing",
    icon: <HardDrive className="w-5 h-5" />
  },
  {
    title: "G-Drive (Full Client 2)",
    url: "https://drive.google.com/file/d/1tCvN5nwgXvTb4VZhc_C2OcufinMVtmnS/view?usp=sharing",
    icon: <HardDrive className="w-5 h-5" />
  },
  {
    title: "Mega Nz (Full Client)",
    url: "https://mega.nz/file/yccHgCZb#PsiNfFkldvk9do2_bDLXo0lur1xa8MZgF_E6O9WLnhk",
    icon: <Download className="w-5 h-5" />
  },
  {
    title: "Mediafire (Full Client)",
    url: "https://www.mediafire.com/file/vkcy1gududmirve/Ran_Online_Ultima_v2825.exe/file",
    icon: <Download className="w-5 h-5" />
  }
];

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Profile Section */}
        <ProfileHeader />
        
        {/* Social Links */}
        <SocialLinks />
        
        {/* Download Links */}
        <div className="space-y-3">
          {downloadLinks.map((link, index) => (
            <LinkCard
              key={index}
              title={link.title}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </div>
        
        {/* Featured Banner */}
        <Card className="glass-card glow-hover overflow-hidden">
          <div className="relative">
            <img 
              src={gameBanner} 
              alt="Ran Online Ultima Game Banner"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-bold text-foreground mb-1">
                Ran Online Ultima
              </h3>
              <p className="text-sm text-muted-foreground">
                Official Group
              </p>
            </div>
          </div>
          <div className="p-4">
            <LinkCard
              title="Join Official Group"
              url="https://www.facebook.com/groups/ranonlinedigmaan"
              icon={<Users className="w-5 h-5" />}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;