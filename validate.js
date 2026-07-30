
export function validateNewBookTitle() {
    const titleInput = document.querySelector('#title');
    if(titleInput.value.trim().length<3) {
        titleInput.setCustomValidity(`Title must be at least 3 chars long (you entered: ${titleInput.value.trim()})`)
    }
    else if (titleInput.value.trim() === '') {
        titleInput.setCustomValidity('Title is required!')
    }
    else if (titleInput.value.trim().length>20) {
        titleInput.setCustomValidity(`Title cannot exceed 20 chars long (you entered: ${titleInput.value.trim()})`)
    }
    else {
        titleInput.setCustomValidity("")
    }
    return titleInput.reportValidity()
}

export function validateNewBookAuthor() {
    const authorInput = document.querySelector('#author');
    if(authorInput.value.trim().length<3) {
        authorInput.setCustomValidity(`Author name must be at least 3 chars long (you entered: ${authorInput.value.trim()})`)
    }
    else if (authorInput.value.trim().length>20) {
        authorInput.setCustomValidity(`Author name must not exceed 20 chars long (you entered: ${authorInput.value.trim()})`)
    }
    else if (authorInput.value.trim() === '') {
        authorInput.setCustomValidity('Author name is required!')
    }
    else {
        authorInput.setCustomValidity("")
    }
    return authorInput.reportValidity()
}

export function validateNewBookPage() {
    const pageNumberInput = document.querySelector('#pages-count');
    if(pageNumberInput.value==='') {
        pageNumberInput.setCustomValidity('Number of Pages is required')
    }
    else if (pageNumberInput.value<=0) {
        pageNumberInput.setCustomValidity(`Pages number cannot be less than or equal to zero (you entered: ${pageNumberInput.value})`)
    }
    else if(pageNumberInput.value>5000) {
        pageNumberInput.setCustomValidity(`Cannot exceed 5000 pgs (${pageNumberInput.value})`)
    }
    else {
        pageNumberInput.setCustomValidity("")
    }
    return pageNumberInput.reportValidity()
}

export function validateNewBookDescription() {
    const descriptionInput = document.querySelector('#description');
    if(descriptionInput.value.trim().length>60) {
        descriptionInput.setCustomValidity('Description must not exceed 60 chars!')
    }
    else {
        descriptionInput.setCustomValidity('')
    }
    return descriptionInput.reportValidity()
}

export function validateNewBookForm() {
    const areValuesProper = validateNewBookTitle() && validateNewBookAuthor() &&
    validateNewBookPage() && validateNewBookDescription()
    return areValuesProper
}