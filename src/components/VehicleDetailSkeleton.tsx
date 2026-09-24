import "./VehicleDetailSkeleton.css";

export function VehicleDetailSkeleton() {
  return <main className="vehicle-detail vehicle-detail-skeleton" aria-busy="true">
    <span className="vehicle-detail__sr-only" role="status">Cargando vehículo</span>
    <div aria-hidden="true">
      <div className="vehicle-detail__banner">
        <div className="vehicle-detail__container">
          <div className="vehicle-detail-skeleton__block vehicle-detail-skeleton__brand" />
          <div className="vehicle-detail-skeleton__block vehicle-detail-skeleton__title" />
        </div>
      </div>
      <div className="vehicle-detail__container">
        <div className="vehicle-detail-skeleton__block vehicle-detail-skeleton__back" />
        <div className="vehicle-detail__hero-grid">
          <div className="vehicle-detail__visual">
            <div className="vehicle-detail-skeleton__block vehicle-detail-skeleton__image" />
            <div className="vehicle-detail-skeleton__colors">
              {[0, 1, 2, 3, 4].map((item) => <span key={item} className="vehicle-detail-skeleton__block" />)}
            </div>
          </div>
          <div className="vehicle-detail__summary">
            <div className="vehicle-detail__pricing">
              <div className="vehicle-detail-skeleton__block vehicle-detail-skeleton__line" />
              <div className="vehicle-detail-skeleton__block vehicle-detail-skeleton__price" />
              <div className="vehicle-detail-skeleton__block vehicle-detail-skeleton__line" />
            </div>
            <div className="vehicle-detail-skeleton__specs">
              {[0, 1, 2, 3, 4, 5].map((item) => <div key={item}>
                <div className="vehicle-detail-skeleton__block vehicle-detail-skeleton__line" />
                <div className="vehicle-detail-skeleton__block vehicle-detail-skeleton__line" />
              </div>)}
            </div>
            <div className="vehicle-detail__actions">
              <div className="vehicle-detail-skeleton__block vehicle-detail-skeleton__cta" />
              <div className="vehicle-detail-skeleton__block vehicle-detail-skeleton__cta" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>;
}
