import React from 'react'
import { setRole } from '~/utils/auth/role'
import { fieldInterested } from '~/utils/auth/fields'

function Route() {
  const fieldsOfInterest = [
    'Full Stack Web Development',
    'Frontend Web Development',
    'Backend Web Development',
    'Mobile App Development',
    'UI / UX Design',
    'Data Science',
    'Machine Learning',
    'Artificial Intelligence',
    'Cloud Computing',
    'DevOps',
    'Game Development',
    'Blockchain',
    'Internet of Things',
    'Augmented Reality',
    'Virtual Reality',
    'Quantum Computing',
    'Robotics',
    '3D Printing',
    'Cyber Security',
    'Network Security',
    'Penetration Testing',
    'Security Operations'
  ]
  const [selectedFields, setSelectedFields] = React.useState<string[]>([])
  const [selectedRole, setSelectedRole] = React.useState<string>('')

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role)
    console.log(selectedRole)
  }

  const handleFieldSelection = (field: string) => {
    if (selectedFields.includes(field)) {
      setSelectedFields(
        selectedFields.filter((selectedField) => selectedField !== field)
      )
    } else {
      if (selectedFields.length < 5) {
        setSelectedFields([...selectedFields, field])
      } else {
        alert('You can only select 5 fields of interest')
      }
    }
  }

  const handleNext = () => {
    if (selectedRole === '') {
      alert('Please select a role')
    } else if (selectedFields.length < 4) {
      alert('Please select at least 5 field of interest')
    } else {
      const response = setRole(selectedRole)
      const response2 = fieldInterested(selectedFields)
      console.log(response)
      console.log(response2)
    }
  }

  return (
    <div className='col-span-3 mx-auto flex w-[100vw] flex-col gap-5 overflow-hidden py-5 pl-3 text-primary xl:max-w-[824px] '>
      <div>
        <h1 className='mb-5 font-arialRegular text-2xl text-primary md:text-center'>
          Choose your role
        </h1>
        <div className='flex w-min flex-col gap-4 md:w-full md:flex-row md:justify-center'>
          <button
            onClick={() => handleRoleSelection('student')}
            className={`${selectedRole === 'student' ? 'bg-primary text-white' : ''} border-2 border-primary px-20 py-2 hover:bg-primary hover:text-white`}
          >
            Student
          </button>
          <button
            onClick={() => handleRoleSelection('teacher')}
            className={`${selectedRole === 'teacher' ? 'bg-primary text-white' : ''} border-2 border-primary px-20 py-2 hover:bg-primary hover:text-white`}
          >
            Teacher
          </button>
        </div>
      </div>
      <div>
        <h1 className='mb-5 font-arialRegular text-2xl text-primary md:text-center'>
          Fields of Interest
        </h1>
        <div className='flex flex-wrap gap-3 md:justify-center'>
          {fieldsOfInterest.map((field, index) => (
            <button
              key={index}
              onClick={() => handleFieldSelection(field)}
              className={`${
                selectedFields.includes(field) ? 'bg-primary text-white' : ''
              } border-2 border-primary px-5 py-2 hover:bg-primary hover:text-white xl:px-10`}
            >
              {field}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        className='mx-auto my-3 w-60 bg-primary px-5 py-2 text-white'
      >
        Next
      </button>
    </div>
  )
}

export default Route
