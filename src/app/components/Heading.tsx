interface HeadingProps {
    title: string
    subtitle?: string
    center?: boolean
}
const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle,
    center = false
}) => {
    return (
        <div className={`text-2xl font-semibold ${center && 'text-center'}`}>
            <h3>{title}</h3>
            {subtitle && <h4 className="text-lg font-medium">{subtitle}</h4>}
        </div>
    )
}

export default Heading
