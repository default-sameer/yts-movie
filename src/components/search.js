
const Search = ({ value, onSearchTextChange }) => {
  return (
    <>
          <div className="flex justify-center align-middle pt-5 sm:pt-10">
              <div className="form-control flex sm:flex-row">
                  <form className="flex pb-5 flex-col sm:flex-row">
                      <input
                          type="text"
                          placeholder="Search for Movies"
                          className="input input-bordered input-primary w-full max-w-xs text-center"
                          value={value}
                          onChange={(e) => onSearchTextChange(e.target.value)} />
                  </form>
              </div>
          </div> 
    </>
  )
}

export default Search