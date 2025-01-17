import React from 'react';
import {getCategoryById} from "@/app/(admin)/dashboard/categories/lib/data";

const SelectCategory = ({categories, defaultName}) => {


    return (
        <select
            id="category"
            name="category_id"
            defaultValue={defaultName}
            className="border rounded px-3 py-2"
        >
            <option value="" disabled>
                Pilih kategori
            </option>
            {categories.map((category) => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
            ))}
        </select>
    );
};

export default SelectCategory;