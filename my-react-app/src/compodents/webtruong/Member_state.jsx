import React from "react";

class Member_state extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedKhoa: "",
      selectedLop: "",

      khoas: ["Công nghệ thông tin", "Kinh tế", "Ngoại ngữ"],
      lops: {
        "Công nghệ thông tin": ["CNTT1", "CNTT2", "CNTT3"],
        "Kinh tế": ["KT1", "KT2"],
        "Ngoại ngữ": ["NN1", "NN2", "NN3"],
      },
    };
  }

  handleKhoaChange = (e) => {
    this.setState({
      selectedKhoa: e.target.value,
      selectedLop: "",
    });
  };

  handleLopChange = (e) => {
    this.setState({
      selectedLop: e.target.value,
    });
  };

  handleClick = () => {
    alert(
      `Khoa: ${this.state.selectedKhoa}\nLớp: ${this.state.selectedLop}`
    );
  };

  render() {
    const { khoas, lops, selectedKhoa } = this.state;

    return (
      <div style={{ width: "300px", margin: "20px auto" }}>
        <h2>Chọn Khoa – Lớp</h2>

        {/* KHOA */}
        <label>Khoa:</label>
        <select
          className="form-select"
          value={this.state.selectedKhoa}
          onChange={this.handleKhoaChange}
        >
          <option value="">-- Chọn Khoa --</option>
          {khoas.map((k, index) => (
            <option key={index}>{k}</option>
          ))}
        </select>

        {/* LỚP */}
        <label>Lớp:</label>
        <select
          className="form-select"
          value={this.state.selectedLop}
          onChange={this.handleLopChange}
          disabled={!selectedKhoa}
        >
          <option value="">-- Chọn Lớp --</option>

          {selectedKhoa &&
            lops[selectedKhoa].map((lop, index) => (
              <option key={index}>{lop}</option>
            ))}
        </select>

        {/* BUTTON */}
        <button
          className="btn btn-primary mt-3"
          onClick={this.handleClick}
          disabled={!this.state.selectedLop}
        >
          Xác nhận
        </button>
      </div>
    );
  }
}

export default Member_state;
