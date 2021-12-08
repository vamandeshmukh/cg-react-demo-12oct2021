const Logout = () => {

    // Source: https://getbootstrap.com/docs/4.0/components/modal/

    // incomplete 

    return (
        <div className="mt-3 mb-3">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Logout
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-primary" id="exampleModalLabel">Logout</h5>
                            <button type="button" class="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to logout?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-dismiss="modal">Logout</button>
                            <button type="button" class="btn btn-primary">Stay logged in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Logout;