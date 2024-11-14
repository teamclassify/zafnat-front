import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../components/ui/button";

import { useMutation } from "react-query";
import { toast } from "sonner";
import useUser from "../../../hooks/useUser";
import UsersService from "../../../services/api/UsersService";
import HeaderTab from "./HeaderTab";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres",
  }),
  lastName: z.string().min(2, {
    message: "El apellido debe tener al menos 2 caracteres",
  }),
  gender: z
    .string({
      required_error: "Debes seleccionar un genero",
    })
    .optional(),
  email: z.string().email("El correo electrónico no es válido"),
  phone: z.string().min(10, {
    message: "El celular debe tener al menos 10 caracteres",
  }),
});

function ProfileTab() {
  const { user } = useUser();

  const mutateUpdateProfile = useMutation(
    (data) => {
      return UsersService.update(
        data.firstName,
        data.lastName,
        data.gender,
        data.phone
      );
    },
    {
      onSuccess: (data) => {
        toast.success("Perfil actualizado");

        if (data.error) {
          toast.error(data.error);
        }
      },
      onError: (error) => {
        toast.error("Ocurrió un error al actualizar el perfil");
        console.log(error);
      },
    }
  );

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      gender: user?.gender || "na",
      email: user?.email || "",
      phone: user?.phone || "",
    },
  });

  function onSubmit(values) {
    mutateUpdateProfile.mutate(values);
  }

  return (
    <div>
      <HeaderTab title="Perfil" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Genero</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="">
                      <SelectValue placeholder="Selecciona un genero" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fale">Femenino</SelectItem>
                      <SelectItem value="male">Masculino</SelectItem>
                      <SelectItem value="na">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Celular</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <Button type="submit" disabled={mutateUpdateProfile.isLoading}>
            {mutateUpdateProfile.isLoading ? "Guardando..." : "Guardar"}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ProfileTab;
