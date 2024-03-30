type TProps = {
    title?: string;
    children?: React.ReactNode;
}

export const DiaryTitle = ({
    title,
    children
}: TProps) => {
    return(
        <div className="flex justify-start items-start mb-2">
            <span className="text-[20px] mr-1">{title}</span>
            {children}
        </div>
    )
}