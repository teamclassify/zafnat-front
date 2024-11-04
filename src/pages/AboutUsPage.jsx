import DefaultTemplate from "../components/templates/DefaultTemplate";
import { Card, CardContent, CardHeader} from "@/components/ui/card";
import Logo from "../components/custom/LogoAboutUs";

function AboutUsPage() {
  return (
    <DefaultTemplate>
      <div>
        <Card className="p-10">
          <CardHeader>
            <Logo />
          </CardHeader>
          <CardContent>
            <h1 className="text-3xl font-bold -12">Misión</h1>
            <p className="mb-12 pt-12">
              Verificamos minuciosamente la calidad de nuestros productos, trabajando sólo con proveedores confiables 
              para ofrecerte un producto de la mejor calidad. En ZafNat contamos con los más altos estándares de calidad 
              y servicio al cliente. Pero lo más importante es que creemos que comprar no es un lujo, sino una necesidad,
              por lo que nos esforzamos en brindarte los mejores productos a los precios más accesibles, y te los enviamos
              sin importar dónde estés.
            </p>
            
            <h1 className="text-3xl font-bold">Visión</h1>
            <p className="mb-12 pt-12">
              Llevar la marca a un nivel internacional, ser una marca que venda pantalones en todo el mundo. Ser para el
              año 2026 una empresa innovadora y solidaria que fabrica, comercializa y distribuye pantalones y jeans para 
              dama, proceso de tintorería, confección, bordado y plotter. Brindando a los clientes una excelente calidad, un 
              buen servicio y un precio justo.
            </p>

            <h1 className="text-3xl font-bold">Ubicaciones</h1>
            <h4 className="pt-12 mb-6">Carrera 53, #45-115 local 145, CC Multivariedades, Medellin, Antioquia</h4>
            <div  className="aspect-video">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.495624195371!2d-75.57271102216491!3d6.247398699999994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429000869a4b9%3A0xccf6c366098b234e!2sZaf%20Nat%20Medell%C3%ADn!5e0!3m2!1ses!2sco!4v1730749821282!5m2!1ses!2sco" 
                width="100%" 
                height="100%">
              </iframe>
            </div>
            <h4 className="pt-12 mb-6">Calle 12b #9-40 CC NEOS local 144, Bogota, Cundinamarca</h4>
            <div className="aspect-video">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.955422967342!2d-74.0764197961731!3d4.6020064123615025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a0ac4ddfb3%3A0xeeae66bdebc6ab6f!2sNeos%20Centro!5e0!3m2!1ses!2sco!4v1730750180211!5m2!1ses!2sco"
                width="100%" 
                height="100%">
              </iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </DefaultTemplate>
  );
}

export default AboutUsPage;