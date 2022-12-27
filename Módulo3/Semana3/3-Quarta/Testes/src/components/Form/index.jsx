import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
 
export const Form = () => {

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email é obrigatório").email("Email inválido"),
    password: yup.string().required("Você precisa de uma senha").min(6, "Precisa ter no mínimo 6 caracteres")
  })

  const { register, handleSubmit, formState:  { errors } } = useForm({
    resolver: yupResolver(formSchema)
  })

  const submitInfo = (data) => {
    return console.log(data)
  }

  console.log(errors)

  return(
    <form onSubmit={handleSubmit(submitInfo)} noValidate>
        <label htmlFor="name">Nome: </label>
        <input 
        id="name" 
        type="text" 
        {...register("name")}
        />
        {errors.name && errors.name.message}
        <label htmlFor="email">Email: </label>
        <input 
        type="email" 
        id="email"
        {...register("email")}
        />
        {errors.email && errors.email.message}
        <label htmlFor="password">Senha: </label>
        <input 
        id="password"
        type="password" 
        {...register("password")}
        />
        {errors.password && errors.password.message}
        <button type="submit">Submit</button>
    </form>
  )
}