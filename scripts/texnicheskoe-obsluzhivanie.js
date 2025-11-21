document.addEventListener('DOMContentLoaded', function() {
    const patterns = {
        name: /^[а-яА-ЯёЁa-zA-Z\s\-]{2,50}$/,
        phone: /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    };

    const validationModal = document.getElementById('validationModal');
    const validationList = document.getElementById('validationList');
    const errorCount = document.getElementById('errorCount');
    const closeValidationModal = document.getElementById('closeValidationModal');

    function showValidationModal(errors) {
        validationList.innerHTML = '';
        errorCount.textContent = errors.length;
        
        errors.forEach(error => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-times-circle"></i><span>${error.message}</span>`;
            validationList.appendChild(li);
        });

        validationModal.classList.add('show');
        
        errors.forEach(error => {
            if (error.fieldId) {
                const field = document.getElementById(error.fieldId);
                if (field) {
                    field.classList.add('field-error-highlight');
                    setTimeout(() => {
                        field.classList.remove('field-error-highlight');
                    }, 2000);
                }
            }
        });
    }

    function hideValidationModal() {
        validationModal.classList.remove('show');
    }

    closeValidationModal.addEventListener('click', hideValidationModal);

    validationModal.addEventListener('click', function(e) {
        if (e.target === validationModal) {
            hideValidationModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && validationModal.classList.contains('show')) {
            hideValidationModal();
        }
    });

    function validateForm(form) {
        let isValid = true;
        const errors = [];
        
        const requiredInputs = form.querySelectorAll('.form-control-modern[required]');
        requiredInputs.forEach(input => {
            const value = input.value.trim();
            const fieldName = input.previousElementSibling?.textContent.replace('*', '').trim() || 'Поле';
            
            if (!value) {
                errors.push({
                    message: `${fieldName} обязательно для заполнения`,
                    fieldId: input.id
                });
                input.classList.add('error');
                isValid = false;
            } else {
                const validateType = input.getAttribute('data-validate');
                if (validateType && !patterns[validateType].test(value)) {
                    let message = '';
                    switch(validateType) {
                        case 'name':
                            message = `${fieldName}: введите корректное ФИО (только буквы, 2-50 символов)`;
                            break;
                        case 'phone':
                            message = `${fieldName}: введите номер в формате +7 (999) 123-45-67`;
                            break;
                        case 'email':
                            message = `${fieldName}: введите корректный email адрес`;
                            break;
                    }
                    errors.push({
                        message: message,
                        fieldId: input.id
                    });
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.remove('error');
                    input.classList.add('success');
                }
            }
        });

        const checkbox = form.querySelector('input[type="checkbox"][required]');
        const checkboxError = document.getElementById('agree-error');
        if (checkbox && !checkbox.checked) {
            errors.push({
                message: 'Необходимо согласие с политикой конфиденциальности',
                fieldId: checkbox.id
            });
            if (checkboxError) checkboxError.classList.add('show');
            isValid = false;
        } else {
            if (checkboxError) checkboxError.classList.remove('show');
        }

        if (!isValid && errors.length > 0) {
            showValidationModal(errors);
            return false;
        }

        return isValid;
    }

    const techServiceForm = document.getElementById('techServiceForm');
    if (techServiceForm) {
        techServiceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                const submitButton = this.querySelector('.submit-modern');
                const submitText = submitButton.querySelector('.submit-text');
                const submitLoading = submitButton.querySelector('.submit-loading');
                const successMessage = document.getElementById('success');

                submitText.style.display = 'none';
                submitLoading.style.display = 'flex';
                submitButton.disabled = true;

                setTimeout(() => {
                    successMessage.classList.add('show');
                    submitText.style.display = 'block';
                    submitLoading.style.display = 'none';
                    submitButton.disabled = false;

                    setTimeout(() => {
                        this.reset();
                        successMessage.classList.remove('show');
                        this.querySelectorAll('.form-control-modern').forEach(input => {
                            input.classList.remove('error', 'success');
                        });
                        this.querySelectorAll('.error-message-modern').forEach(error => {
                            error.classList.remove('show');
                        });
                        this.querySelectorAll('.checkbox-error-modern').forEach(error => {
                            error.classList.remove('show');
                        });
                    }, 5000);
                }, 2000);
            }
        });
    }

    document.querySelectorAll('.form-control-modern').forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('error', 'success');
            const errorId = this.id + '-error';
            const errorElement = document.getElementById(errorId);
            if (errorElement) errorElement.classList.remove('show');
        });
    });

    document.querySelectorAll('input[type="checkbox"][required]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const errorElement = document.getElementById('agree-error');
            if (errorElement) errorElement.classList.remove('show');
        });
    });

    document.querySelectorAll('input[data-validate="phone"]').forEach(input => {
        input.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 10) value = value.substring(0, 10);
            if (value.length > 0) {
                let formattedValue = '+7 ';
                if (value.length > 0) formattedValue += '(' + value.substring(0, 3);
                if (value.length > 3) formattedValue += ') ' + value.substring(3, 6);
                if (value.length > 6) formattedValue += '-' + value.substring(6, 8);
                if (value.length > 8) formattedValue += '-' + value.substring(8, 10);
                this.value = formattedValue;
            }
        });
    });
});

