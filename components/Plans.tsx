import { CheckIcon } from '@heroicons/react/24/outline'
import { Product } from '@stripe/firestore-stripe-payments'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import { loadCheckout } from '../lib/stripe'
import Table from './Table'
import Loader from './Loader'
import { HomeIcon } from '@heroicons/react/24/solid'

interface Props {
  products: Product[]
}

function Plans({ products }: Props) {
  const { logout, user } = useAuth()
  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[2])
  const [isBillingLoading, setBillingLoading] = useState(false)

  console.log(products)

  const subscribeToPlan = () => {
    if (!user) return

    loadCheckout(selectedPlan?.prices[0].id!)
    setBillingLoading(true)
  }

  return (
    <div>
      <Head>
        <title>Movie Catalogue</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
        <HomeIcon className= "cursor-pointer rounded,h-7 w-7"/>
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-5 pt-28 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that is right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
             Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
             Change or cancel
            your plan anytime.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center justify-end self-end md:w-3/5">
            {products.map((product) => (
              <div
                className={`planBox ${
                  selectedPlan?.id === product.id ? 'opacity-100' : 'opacity-60'
                }`}
                key={product.id}
                onClick={() => setSelectedPlan(product)}
              >
                {product.name}
              </div>
            ))}
          </div>

          <Table products={products} selectedPlan={selectedPlan} />

          <button
            disabled={!selectedPlan || isBillingLoading}
            className={`mx-auto w-11/12 rounded bg-[#0B1B28] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
              isBillingLoading && 'opacity-60'
            }`}
            onClick={subscribeToPlan}
          >
            {isBillingLoading ? (
              <Loader color="dark:fill-gray-300" />
            ) : (
              'Subscribe'
            )}
          </button>
        </div>
      </main>
    </div>
  )
}

export default Plans
