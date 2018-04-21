import React, { Component } from 'react'
import axios from 'axios'


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreview: ''
    }
  }
  handleSubmit(evt) {
    evt.preventDefault()
    axios.post('/api/wayneApi', this.state.file) // sends to backend route
      .then(res => console.log (res))
      .catch(err => console.log(err))
    console.log('handle uploading-', this.state.file)
  }
  handleImageChange(evt) {
    evt.preventDefault()
    const reader = new FileReader()
    const file = evt.target.files[0]
    reader.onloadend = () => {
      this.setState({
        file,
        imagePreview: reader.result
      })
    }
    reader.readAsDataURL(file)
  }

  render() {
    const {imagePreview} = this.state
    let imgPlaceHolder = null
    if (imagePreview) {
      imgPlaceHolder = (<img src={imagePreview} alt="villian" />)
    } else {
      imgPlaceHolder = (<div className="previewText">Please Upload Possible Villian</div>)
    }

    return (
      <form onSubmit={evt => this.handleSubmit(evt)}>
        <input type="file" id="imgInput" onChange={evt => this.handleImageChange(evt)} />
        <button
          className="submitButton" 
          type="submit" 
          onClick={evt => this.handleSubmit(evt)}
        >
          Upload Image
        </button>
        <div className="imgPreview">
          {imagePreview}
        </div>
      </form>
    )
  }
}

export default Form
