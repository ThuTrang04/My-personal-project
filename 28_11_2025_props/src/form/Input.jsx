import React, { Component } from 'react';

class StudentInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: '',
            className: '',
            address: '',
            submittedData: null,
            phone:'',
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        // Kiểm tra nếu tất cả các trường đều đã nhập
        if (this.state.studentName && this.state.className && this.state.address && this.state.phone) {
            // Tạo object dữ liệu sinh viên
            const studentData = {
                name: this.state.studentName,
                className: this.state.className,
                address: this.state.address,
                phone: this.state.phone
            };
            
            // Giả lập lưu vào CSDL
            console.log("Đã lưu thông tin sinh viên vào CSDL:", studentData);
            
            // Hiển thị thông báo
            this.setState({
                submittedData: studentData
            });
            
            // Giả lập gửi thông báo thành công
            alert(`localhost:3000 cho biết\nĐã lưu thông tin sinh viên: ${studentData.name} học lớp: ${studentData.className} địa chỉ: ${studentData.address} số điện thoại: ${studentData.phone} vào cơ sở dữ liệu`);
            
            // Reset form
            this.setState({
                studentName: '',
                className: '',
                address: '',
                phone: ''
            });
        } else {
            alert("Vui lòng nhập đầy đủ thông tin sinh viên!");
        }
    }
    //Tạo viết số điện thoại

    // Tạo danh sách lớp từ 20CNTT1A đến 26CNTT1A
    generateClassOptions = () => {
        const classes = [];
        for (let i = 20; i <= 26; i++) {
            classes.push(`${i}CNTT1A`);
        }
        return classes;
    }

    render() {
        const classOptions = this.generateClassOptions();

        return (
            <div style={styles.container}>
                <h2 style={styles.header}>HD</h2>
                
                <div style={styles.formContainer}>
                    <h3 style={styles.title}>thông tin sinh viên:</h3>
                    
                    <form onSubmit={this.handleSubmit}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>tên sinh viên</label>
                            <input
                                type="text"
                                name="studentName"
                                value={this.state.studentName}
                                onChange={this.handleInputChange}
                                style={styles.input}
                                placeholder="Nhập tên sinh viên"
                                required
                            />
                        </div>
                        
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>lớp</label>
                            <select
                                name="className"
                                value={this.state.className}
                                onChange={this.handleInputChange}
                                style={styles.select}
                                required
                            >
                                <option value="">-- Chọn lớp --</option>
                                {classOptions.map((className, index) => (
                                    <option key={index} value={className}>
                                        {className}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>địa chỉ</label>
                            <input
                                type="text"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleInputChange}
                                style={styles.input}
                                placeholder="Nhập địa chỉ"
                                required
                            />
                        </div>
                         <div style={styles.inputGroup}>
                            <label style={styles.label}>Số điện thoại</label>
                            <input
                                type="text"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleInputChange}
                                style={styles.input}
                                placeholder="Nhập số điện thoại"
                                required
                            />
                        </div>
                        
                        <button 
                            type="submit" 
                            style={styles.submitButton}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
                        >
                            Submit
                        </button>
                    </form>
                    
                    {/* Hiển thị thông tin đã submit */}
                    {this.state.submittedData && (
                        <div style={styles.resultContainer}>
                            <h2 style={styles.header}>HD</h2>
                            <div style={styles.resultContent}>
                                <p style={styles.resultText}>
                                    localhost:3000 cho biết
                                </p>
                                <p style={styles.resultDetails}>
                                    đã lưu thông tin sinh viên: {this.state.submittedData.name} học lớp: {this.state.submittedData.className} địa chỉ: {this.state.submittedData.address} số điện thoại: {this.state.submittedData.phone} vào cơ sở dữ liệu
                                </p>
                            </div>
                            <button 
                                onClick={() => this.setState({ submittedData: null })}
                                style={styles.okButton}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
                            >
                                OK
                            </button>
                        </div>
                    )}
                </div>

            </div>
        );
    }
}

// CSS Styles
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '500px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9'
    },
    header: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        margin: '0 0 20px 0',
        borderRadius: '3px',
        fontSize: '18px'
    },
    formContainer: {
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    },
    title: {
        marginTop: '0',
        color: '#333',
        textAlign: 'center',
        marginBottom: '25px',
        fontSize: '16px',
        fontWeight: 'normal'
    },
    inputGroup: {
        marginBottom: '20px'
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        color: '#555',
        fontSize: '14px'
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
        fontSize: '14px'
    },
    select: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
        fontSize: '14px',
        backgroundColor: 'white',
        cursor: 'pointer'
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '12px 30px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
        marginTop: '15px',
        transition: 'background-color 0.3s'
    },
    resultContainer: {
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#e8f5e9',
        border: '1px solid #c8e6c9',
        borderRadius: '4px'
    },
    resultContent: {
        backgroundColor: 'white',
        padding: '15px',
        borderRadius: '4px',
        marginBottom: '15px'
    },
    resultText: {
        margin: '10px 0',
        color: '#2e7d32',
        fontWeight: 'bold',
        fontSize: '14px'
    },
    resultDetails: {
        margin: '10px 0',
        color: '#2e7d32',
        fontSize: '14px',
        lineHeight: '1.5'
    },
    okButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 25px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        display: 'block',
        margin: '0 auto',
        transition: 'background-color 0.3s'
    }
};

export default StudentInfoForm;