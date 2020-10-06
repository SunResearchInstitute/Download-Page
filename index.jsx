class DownloadElement extends React.Component {
    render() { 
        return (
            <div className="download">
                <a href={"#" + this.props.dlName}>{this.props.dlName}</a>
                <div className="modal" id={this.props.dlName}>
                    <div className="modal-container">
                        <a className="modal-close" href="#modal-close">&times;</a>
                        <div className="modal-content">
                            <h2>{this.props.dlName}</h2>
                            <h4 className="modal-version">{this.props.dlVersion} for {this.props.dlPlatform}</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <DownloadElement dlName="UwU" dlVersion="1.2.3" dlPlatform="Bukkit"/>
    </div>,
    document.getElementById('root')
)
  