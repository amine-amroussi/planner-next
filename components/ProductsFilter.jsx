'use client'
import RadioBtn from './RadioBtn'

const ProductsFilter = () => {
    return (
        <div className="rounded-lg ">
            <h1 className='border-b font-semibold py-3 text-xl' > Filtrer les produits </h1>
            <div className='my-3 border-b' >
                <h2 className='' >Chercher</h2>
                <input type="text" className='w-full border my-3 outline-none rounded p-2' placeholder='Chercher le produits' />
            </div>
            <div className='my-4 border-b' >
                <h1 className='my-4 ' >Category</h1>
                <RadioBtn name='category' id='cat1' label='Tous' data='hello' />
                <RadioBtn name='category' id='cat2' label='Les Adults' data='hello' />
                <RadioBtn name='category' id='cat3' label='Les Enfents' data='hello' />
            </div>
            <div className='my-4 border-b'>
                <h2 className='' >Le prix</h2>
                <div className='flex gap-2'>
                    <input type="text" className='w-full border my-3 outline-none rounded p-2' placeholder='Min.' />
                    <input type="text" className='w-full border my-3 outline-none rounded p-2' placeholder='Max.' />
                </div>
            </div>
            <div className='my-4 ' >
                <button className='bg-red-600 text-white rounded py-2 px-4 hover:drop-shadow-lg transition-all delay-100 ease-linear' >Anuller filtrage</button>
            </div>
        </div>
    )
}

export default ProductsFilter