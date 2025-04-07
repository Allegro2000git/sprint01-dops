import {ReactNode} from "react";

export type CrossesProps = {
    id: number
    model: string
    size: string
}

type SuperCrossesType = {
    crosses: CrossesProps[]
    children: ReactNode
}

export const SuperCrosses = ({crosses, children}: SuperCrossesType ) => {
    return (
        <div>
            <ul>
                    {crosses.map((el) => (
                        <li key={el.id}>
                            <div>{el.model}</div>
                            <div>{el.size}</div>
                        </li>
                    ))}
            </ul>
            {children}
        <hr/>

        </div>
    );
};