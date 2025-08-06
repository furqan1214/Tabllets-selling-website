'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';


export default function RegistrationForm() {

const router = useRouter();

const [formData, setFormData] = useState({

fullName: '',

phone: '',

email: '',

tabletModel: ''

});


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

const { name, value } = e.target;

setFormData(prev => ({

...prev,

[name]: value

}));

};


const handleSubmit = (e: React.FormEvent) => {

e.preventDefault();

console.log('Form submitted:', formData);

// Redirect to home page after submission

router.push('/');

};


return (

<div className="max-w-md mx-auto p-6 bg-white rounded shadow-md">

<h1 className="text-2xl font-bold mb-6">ORDER REGISTRATION</h1>

<form onSubmit={handleSubmit} className="space-y-4">

<div>

<label htmlFor="fullName" className="block mb-1">Full Name</label>

<input

type="text"

id="fullName"

name="fullName"

value={formData.fullName}

onChange={handleChange}

placeholder="*******"

className="w-full p-2 border border-gray-300 rounded"

/>

</div>


<div>

<label htmlFor="phone" className="block mb-1">Phone</label>

<input

type="tel"

id="phone"

name="phone"

value={formData.phone}

onChange={handleChange}

placeholder="Phone"

className="w-full p-2 border border-gray-300 rounded"

/>

</div>


<div>

<label htmlFor="email" className="block mb-1">Email</label>

<input

type="email"

id="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="Type your email"

className="w-full p-2 border border-gray-300 rounded"

/>

</div>


<div>

<label htmlFor="tabletModel" className="block mb-1">Tablet Model</label>

<select

id="tabletModel"

name="tabletModel"

value={formData.tabletModel}

onChange={handleChange}

className="w-full p-2 border border-gray-300 rounded"

>

<option value="">Select your tablet</option>

<option value="Apple">Apple</option>

<option value="Samsung">Samsung</option>

<option value="Microsoft">Microsoft</option>

<option value="Alacatel">Alcatel</option>

<option value="leveno">Lenovo</option>

</select>

</div>


<button

type="submit"

className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"

>

Submit

</button>

</form>

</div>

);

}

