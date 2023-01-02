import './FeatureCard.scss'

function FeatureCard({header, paragraph, icon}: { header: string, paragraph: string, icon: string }) {
    return (<article>
        <h3>{header}</h3>
        <p>{paragraph}</p>
        <img src={icon} alt=""/>

    </article>);
}

export default FeatureCard;