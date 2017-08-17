import React from 'react'
import { renderIf } from '../../lib/util.js'

class AdminListingsItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: this.props.listing._id,
      updating: false,
      verified: this.props.listing.verified,
      cost: this.props.listing.cost,
      landlordPhone: this.props.listing.landlordPhone,
      petsAllowed: this.props.listing.petsAllowed,
      nonSmoking: this.props.listing.nonSmoking,
      parkingSpaces: this.props.listing.parkingSpaces,
      comment: this.props.listing.comment,
    }
    this.handleEditListing = this.handleEditListing.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    if (e.target.name === 'petsAllowedYes' || e.target.name === 'petsAllowedNo')
      this.setState({ petsAllowed: e.target.value })
    if (e.target.name === 'nonSmokingYes' || e.target.name === 'nonSmokingNo')
      this.setState({ nonSmoking: e.target.value })
    if (e.target.name === 'verifiedYes' || e.target.name === 'verifiedNo')
      this.setState({ verified: e.target.value })
    let { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleEditListing() {
    this.setState({ updating: true })
  }

  render() {
    let listing = this.props.listing
    return (
      <div>
        {renderIf(
          !this.state.updating,
          <div>
            <p>
              title: {listing.title}
            </p>
            <p>
              date uploaded: {listing.listingCreatedOn}
            </p>
            <p>
              link: <a href="{listing.listingURL}">{listing.listingURL}</a>
            </p>
            <p>
              verified: {listing.verified ? 'yes' : 'no'}
            </p>
            <p>
              rent cost: {listing.cost}
            </p>
            <p>
              landlord phone: {listing.landlordPhone}
            </p>
            <p>
              pets allowed? {listing.petsAllowed ? 'yes' : 'no'}
            </p>
            <p>
              non-smoking? {listing.nonSmoking ? 'yes' : 'no'}
            </p>
            <p>
              parking spaces: {listing.parkingSpaces}
            </p>
            <p>
              comments: {listing.comment}
            </p>
            <button onClick={this.handleEditListing}>edit</button>
            <span> </span>
            <button onClick={() => this.props.listingDelete(listing)}>x</button>
          </div>
        )}
        {renderIf(
          this.state.updating,
          <form
            onSubmit={e => {
              e.preventDefault()
              this.props.listingUpdate(this.state)
              this.setState({ updating: false })
            }}
          >
            <p>
              title: {listing.title}
            </p>
            <label>
              verified
              <label>
                yes
                <input
                  type="radio"
                  name="verifiedYes"
                  onChange={this.handleChange}
                  value="true"
                />
              </label>
              <label>
                no
                <input
                  type="radio"
                  name="verifiedNo"
                  onChange={this.handleChange}
                  value="false"
                />
              </label>
            </label>
            <label>
              cost
              <input
                name="cost"
                type="text"
                value={this.state.cost}
                onChange={this.handleChange}
              />
            </label>
            <label>
              landlord phone
              <input
                name="landlordPhone"
                type="text"
                value={this.state.landlordPhone}
                onChange={this.handleChange}
              />
            </label>
            <label>
              pets allowed
              <label>
                yes
                <input
                  type="radio"
                  name="petsAllowedYes"
                  onChange={this.handleChange}
                  value="true"
                />
              </label>
              <label>
                no
                <input
                  type="radio"
                  name="petsAllowedNo"
                  onChange={this.handleChange}
                  value="false"
                />
              </label>
            </label>
            <label>
              nonSmoking?
              <label>
                yes
                <input
                  type="radio"
                  name="nonSmokingYes"
                  onChange={this.handleChange}
                  value="true"
                />
              </label>
              <label>
                no
                <input
                  type="radio"
                  name="nonSmokingNo"
                  onChange={this.handleChange}
                  value="false"
                />
              </label>
            </label>
            <label>
              # parking spaces
              <input
                name="parkingSpaces"
                type="number"
                value={this.state.parkingSpaces}
                onChange={this.handleChange}
              />
            </label>
            <label>
              comments
              <input
                name="comment"
                type="text"
                value={this.state.comment}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">update</button>
          </form>
        )}
      </div>
    )
  }
}

export default AdminListingsItem
