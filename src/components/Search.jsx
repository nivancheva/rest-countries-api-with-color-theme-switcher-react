import './Search.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    country: yup.string().required(),
}).required();

export default function Search({ onSearch }) {
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function getCountry(data) {
        onSearch(data.country);
    }

    return (
        <div className='margin-block-3'>
            <form onSubmit={handleSubmit(getCountry)} className='input container'>
                <input 
                    {...register("country")}
                    className={`search-country${errors.country?.message ? " inputIfError" : ""}`}
                    placeholder='Search for a country…'/>
                <i className='bx bx-search'></i>
                {errors.country?.message && <p className='errors'>{errors.country?.message}</p>}
            </form>
        </div>
    )
}