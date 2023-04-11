import { ParamListBase, useLinkTo } from "@react-navigation/native"

type To = {
    screen: string
    params?: Record<string, unknown>
}

export function useNavigate() {
    const navigate = useLinkTo<ParamListBase>()

    return (to: To | string) => navigate(to)
}
