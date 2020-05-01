import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@jesse541/ckeditor5-build-classic';


class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Using CKEditor 5 build in React</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    config={{
                        toolbar: [ 'heading', 'alignment', '|', 'italic', 'underline', 'bold', '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo' ],
                        heading: {
                            options: [
                                { model: 'heading2', view: 'h2', title: 'Heading', class: 'ck-heading_heading2' },
                                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' }
                            ]
                        },
                        placeholder: "Enter your response here",
                        wordCount: {
                            onUpdate: stats => {
                                // Prints the current content statistics.
                                console.log( `Characters are: ${ stats.characters }\nWords: ${ stats.words }` );
                            }
                        }
                    }}

                    // data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
    }
}

export default App;
