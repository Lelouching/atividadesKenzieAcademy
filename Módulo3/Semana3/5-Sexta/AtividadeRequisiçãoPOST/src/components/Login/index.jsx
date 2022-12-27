import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api.js"

export const Login = ({ children, setAuthentication }) => {

    const formSchema = yup.object().shape({
        username: yup.string().required("É necessário colocar o nome de usuário"),
        password: yup.string().required("É necessário colocar a senha")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(formSchema)
    })

    const formSubmit = async (data) => {
        try{
            const loginUser = await api.post("", data)
            console.log(loginUser)
            setAuthentication(true)
        } catch (err) {
            console.log(err)
            setAuthentication(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(formSubmit)} noValidate>
                <input type="text" placeholder="Seu usuário" {...register("username")} />
                {errors.username && <span>{errors.username.message}</span>}
                <input type="text" placeholder="Sua senha" {...register("password")} />
                {errors.password && <span>{errors.password.message}</span>}
                <button>Logar</button>
            </form>
            {children}
        </div>
    )
}