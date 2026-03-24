type ServiceItemProps = {
  title: string
  description: string
}

export default function ServiceItem({
  title,
  description,
}: ServiceItemProps) {
  return (
    <div className="service-item">

      <h3 className="service-title">{title}</h3>

      <p className="service-description">
        {description}
      </p>
    </div>
  )
}