import { FaqsItem } from "./FaqsItem"
import classes from './Faqs.module.scss'
import { useTranslation } from 'react-i18next'

export const FaqsList = () => {
    const { t } = useTranslation()
    return (
        <div className={classes.questions}>
            <div className="container">
                <div className={classes.list}>
                    <FaqsItem title={t('questions.return policy.title')} text={t('questions.return policy.text')} />
                    <FaqsItem title={t('questions.support.title')} text={t('questions.support.text')} />
                    <FaqsItem title={t('questions.gift card.title')} text={t('questions.gift card.text')} />
                    <FaqsItem title={t('questions.purchase.title')} text={t('questions.purchase.text')} />
                </div>
            </div>
        </div>
    )
}
