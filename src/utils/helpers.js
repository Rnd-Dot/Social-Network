const updateObjInArray = (items, itemsId, objPropName, newObjProps) => {
    items.map(u => {
        if (u[objPropName] === itemsId) {
            return { ...u, ...newObjProps }
        }
        return u;
    })

}

export default updateObjInArray;