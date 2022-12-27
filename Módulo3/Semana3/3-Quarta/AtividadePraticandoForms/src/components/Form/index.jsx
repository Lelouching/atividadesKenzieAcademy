import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

export const Form = ({ setData }) => {

    const formSchema = yup.object().shape({
        userName: yup.string().required("Você precisa de um nome de usuário."),
        nameComplete: yup.string().required("Você precisa colocar seu nome."),
        email: yup.string().required("Você precisa de um Email").email("Não é um Email."),
        confirmEmail: yup.string().required("Você precisa confirmar seu email").email("Não é um Email.").oneOf([yup.ref("email")], "Os emails devem ser iguais"),
        password: yup.string().required("Você precisa de uma senha").matches(/[0-9]/, "Tem que ter um número a senha").matches(/[a-z]/, "Tem que ter uma letra minúscula").matches(/[A-Z]/, "Tem que ter uma letra maiúscula").matches(/[!,@,$,%,#,&,*,?,-]/, "Tem que ter um caractere especial"),
        confirmPassword: yup.string().required("Você precisa confirmar sua senha").oneOf([yup.ref("password")], "As senhas devem ser iguais "),
        avatar: yup.string().required("Você precisa colocar uma imagem").url("Precisa ser um link")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(formSchema)
    })

    const formSubmit = (data) => {
        setData(data)
    }

    console.log(errors)

    return (
        <form onSubmit={handleSubmit(formSubmit)} noValidate>
            <input type="text" placeholder="Nome de usuário*" {...register("userName")} />
            {errors.userName && errors.userName.message}
            <input type="text" placeholder="Nome completo*" {...register("nameComplete")} />
            {errors.nameComplete && errors.nameComplete.message}
            <input type="email" placeholder="Endereço de Email*" {...register("email")} />
            {errors.email && errors.email.message}
            <input type="email" placeholder="Confirme seu Email*" {...register("confirmEmail")} />
            {errors.confirmEmail && errors.confirmEmail.message}
            <div>
                <input type="password" placeholder="Senha*" {...register("password")} />
                {errors.password && errors.password.message}
                <input type="password" placeholder="Confirme sua senha*" {...register("confirmPassword")} />
                {errors.confirmPassword && errors.confirmPassword.message}
            </div>
            <input type="url" placeholder="Envie um link de uma imagem" {...register("avatar")} />
            {errors.avatar && errors.avatar.message}
            <button type="submit">Cadastrar</button>
        </form>
    )
}