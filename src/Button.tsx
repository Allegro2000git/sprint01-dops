type ButtonProps = {
    title: string;
    onClick: () => void;
    classes?: string;
}

export const Button = ({title, onClick, classes}: ButtonProps) => {

    const onClickHandler = () =>{
        onClick();
    }

    return <button onClick={onClickHandler} className={classes} >{title}</button>
};
