import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  const scrollToProjects = () => {
    // Pour l'instant, on peut juste faire défiler vers le bas
    window.scrollTo({ 
      top: window.innerHeight, 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-background/80" />
        
        {/* Contenu principal */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Animation d'apparition */}
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Leo
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Étudiant en développement front-end passionné par la musique et le basketball. 
              Mon objectif est de créer des projets innovants et de résoudre des problèmes complexes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToProjects}
                className="text-lg px-8 py-3 font-semibold"
              >
                Afficher mes projets
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover:bg-primary/10">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary/10">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>
      
      {/* Section projets (placeholder) */}
      <section className="min-h-screen flex items-center justify-center bg-card">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary">Mes Projets</h2>
          <p className="text-muted-foreground text-lg">
            Cette section sera bientôt remplie avec mes projets passionnants !
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
