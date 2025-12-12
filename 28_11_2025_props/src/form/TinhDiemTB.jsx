import React from "react";

class TinhDiemTB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diem1: "",
            diem2: "",
            diem3: "",
            diemTB: 0
        }
    }

    DiemTB = () => {
        // Sửa lỗi chính tả: parseInt thay vì pardelnt/parselnt
        let diemTB = (parseInt(this.state.diem1) + parseInt(this.state.diem2) + parseInt(this.state.diem3)) / 3;
        
        // Làm tròn đến chữ số thập phân thứ nhất
        diemTB = Math.round(diemTB * 10) / 10;
        
        this.setState({ diemTB: diemTB });
    }

    Xeploai = () => {
        const { diemTB } = this.state;
        
        if (diemTB >= 8) {
            return <h2>Xếp loại: Giỏi</h2>
        } else if (diemTB >= 6.5) {
            return <h2>Xếp loại: Khá</h2>
        } else if (diemTB >= 5) {
            return <h2>Xếp loại: Trung bình</h2>
        } else {
            return <h2>Xếp loại: Yếu</h2>
        }
    }

    render() {
        return (
            <div className="point">
                <h1>Tính điểm trung bình</h1>
                <input 
                    type="number" 
                    placeholder="Điểm cơ sở dữ liệu" 
                    onChange={(e) => this.setState({ diem1: e.target.value })} 
                />
                <br />
                <input 
                    type="number" 
                    placeholder="Điểm lập trình hướng đối tượng" 
                    onChange={(e) => this.setState({ diem2: e.target.value })} 
                />
                <br />
                <input 
                    type="number" 
                    placeholder="Điểm Tin đại cương" 
                    onChange={(e) => this.setState({ diem3: e.target.value })} 
                />
                <br />
                {/* Sửa lỗi: DiemTB thay vì DiemTb */}
                <button onClick={this.DiemTB}>Tính điểm TB</button>
                <h2>Điểm trung bình: {this.state.diemTB}</h2>
                {this.Xeploai()}
            </div>
        )
    }
}

export default TinhDiemTB;
//hello