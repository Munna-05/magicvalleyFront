import React, { useEffect } from 'react'
import { SelectOption } from '../Admin/AdminComponents/SelectOption'

const AdminSelect = () => {
    const admin = localStorage.getItem('admin')
   
    return (
        <div>
            
            <SelectOption />
        </div>
    )
}

export default AdminSelect