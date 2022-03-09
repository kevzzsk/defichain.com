import { SSRConfig, Trans, useTranslation } from 'next-i18next'
import { Header } from '@components/commons/Header'
import { Container } from '@components/commons/Container'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { DeveloperResourceSection } from './_components/DeveloperResourceSection'
import { ExternalLink } from '@components/commons/link/ExternalLink'
import { Head } from '@components/commons/Head'

export default function DevelopersPage (): JSX.Element {
  const { t } = useTranslation(['page-developers', 'common'])

  return (
    <>
      <Head
        title={t('Head.title')}
        description={t('Head.desc')}
      />
      <Header title={t('Header.title')}>
        <div className='mt-10 flex flex-wrap'>
          <div className='w-full text-2xl text-gray-900' data-testid='Header.desc.main'>{t('Header.desc')}
          </div>
        </div>
      </Header>
      <Container>
        <div className='flex w-full mt-16 mb-10'>
          <h2
            className='text-2xl lg:text-3xl font-medium w-full text-center md:text-left'
            data-testid='DevelopersPage.Heading'
          >
            {t('DeveloperResourcesSection.title')}
          </h2>
        </div>
        <DeveloperResourceSection />
      </Container>
      <Container bgClassName='bg-gray-50'>
        <div className='container mx-auto py-10 md:py-20 lg:py-32'>
          <div className='w-full md:w-4/5 lg:1/2 space-y-10'>
            <h2
              className='font-semibold text-2xl lg:text-3xl'
              data-testid='DevelopersPage.Contributors.Heading'
            >
              {t('CoreContributors.title')}
            </h2>
            <p
              className='text-lg'
              data-testid='DevelopersPage.Contributors.Text'
            >
              <Trans
                t={t}
                i18nKey='CoreContributors.desc'
                components={[
                  <ExternalLink key='0' className='text-primary-500' url='https://github.com/defich/' />
                ]}
              />
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps ({ locale }): Promise<{ props: SSRConfig }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'layout', 'page-developers']))
    }
  }
}
