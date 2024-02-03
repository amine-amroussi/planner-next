import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Writing = () => {
    return (
        <section className='my-4'>
            
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 spa lg:gap-8">
                <div class=" rounded-lg ">
                    <Image src='/writing.svg' alt='writing' width={400} height={600} />
                </div>
                <div class="rounded-lg">
                    <h1 className=" text-2xl md:text-4xl uppercase font-bold my-4 md" >Pourquoi on est besoin d un Planneuse ?</h1>
                    <p className="my-2 text-gray-400" >La planification est cruciale dans tous les aspects de la vie, et une planification efficace est la clé du succès. Une planification bien élaborée permet d anticiper les défis, de définir des objectifs clairs et d optimiser les ressources disponibles. Dans le domaine professionnel, une planification stratégique guide les actions, favorise l efficacité opérationnelle et minimise les risques. Pour les projets personnels, elle offre une vision à long terme, aidant à organiser les étapes nécessaires pour atteindre des aspirations individuelles. Une planification rigoureuse stimule la productivité, réduit le stress lié à l incertitude et offre une structure pour atteindre des résultats tangibles. En résumé, la planification est la boussole qui oriente vers le succès.</p>
                </div>
            </div>
        </section>
    )
}

export default Writing